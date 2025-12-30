
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data';
import { Course } from '../../shared/models';

@Component({
  selector: 'app-virtual-classroom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './virtual-classroom.html',
  styleUrls: ['./virtual-classroom.css']
})
export class VirtualClassroomComponent {
  course?: Course;

  constructor(private route: ActivatedRoute, private data: DataService) {
    const id = this.route.snapshot.paramMap.get('courseId')!;
    this.course = data.getCourse(id);
  }
}
