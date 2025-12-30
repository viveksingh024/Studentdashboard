
import { Routes } from '@angular/router';
import { StudentProfile } from './components/student-profile/student-profile';
import { SubjectsComponent } from './components/subjects/subjects';
import { CoursesComponent } from './components/courses/courses';
import { CourseDetailComponent } from './components/course-detail/course-detail';
import { VirtualClassroomComponent } from './components/virtual-classroom/virtual-classroom';
import { AssessmentsComponent } from './components/assessments/assessments';
import { AssessmentQuizComponent } from './components/assessment-quiz/assessment-quiz';
import { ProgressComponent } from './components/progress/progress';
import { FeesComponent } from './components/fees/fees';
import { ExamManagementComponent } from './components/exam-management/exam-management';

export const routes: Routes = [
  { path: '', redirectTo: 'portal', pathMatch: 'full' },
  { path: 'portal', component: StudentProfile, children: [
    { path: '', redirectTo: 'subjects', pathMatch: 'full' },
    { path: 'subjects', component: SubjectsComponent },
    { path: 'assessments', component: AssessmentsComponent },
    { path: 'assessments/quiz/:id', component: AssessmentQuizComponent },
    { path: 'progress', component: ProgressComponent },
    { path: 'fees', component: FeesComponent },
  ]},
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  { path: 'virtual-classroom/:courseId', component: VirtualClassroomComponent },
  { path: 'exam', component: ExamManagementComponent },
  { path: '**', redirectTo: 'portal' }
];
