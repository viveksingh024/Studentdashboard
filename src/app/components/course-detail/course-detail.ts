
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DataService } from '../../services/data';
import { Course } from '../../shared/models';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './course-detail.html',
  styleUrls: ['./course-detail.css']
})
export class CourseDetailComponent {
  course?: Course;

  constructor(private route: ActivatedRoute, private data: DataService) {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.course = data.getCourse(id);
  }
}
