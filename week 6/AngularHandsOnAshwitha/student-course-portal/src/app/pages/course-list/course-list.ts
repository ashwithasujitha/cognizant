import { Component } from '@angular/core';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  courses = [
    { name: 'Angular', code: 'ANG101' },
    { name: 'Java', code: 'JAVA201' },
    { name: 'Python', code: 'PY301' }
  ];

}