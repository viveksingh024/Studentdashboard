
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data';
import { Course, Subject } from '../../shared/models';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css']
})
export class CoursesComponent {
  subjects: Subject[] = [];
  courses: Course[] = [];
  subjectNameById: Record<string, string> = {};

  searchTerm: string = '';

  constructor(private data: DataService) {
    this.subjects = data.getSubjects();
    this.subjectNameById = this.subjects.reduce((acc, s) => {
      acc[s.id] = s.name;
      return acc;
    }, {} as Record<string, string>);

    this.refreshCourses();
  }

  ngOnInit(): void {}

  get filteredCourses(): Course[] {
    const term = this.searchTerm.toLowerCase().trim();

    if (!term) {
      return this.courses;
    }
    return this.courses.filter((course: Course)=>course.title.toLowerCase().includes(term)

    );
  }
  updateSearch(event: Event): void {
    const element = event.target as HTMLInputElement;
    this.searchTerm = element.value;
  }
 

  toggleEnroll(course: Course) {
    this.data.toggleEnroll(course.id, !course.enrolled);
    this.refreshCourses();
  }

  private refreshCourses() {
    this.courses = this.subjects.flatMap(s => this.data.getCoursesBySubject(s.id));
  }
}
