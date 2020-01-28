import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Course} from '@app/model/course';
import {Lesson} from '@app/model/lesson';
import {CoursesService} from '@app/services/courses.service';
import {Observable} from 'rxjs';
import {finalize, tap} from 'rxjs/operators';


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: Course;

  lessons: Lesson[];

  lastPageLoaded = 0;

  loading = false;

  displayedColumns = ['seqNo', 'description', 'duration'];


  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService) {

  }

  ngOnInit() {

    this.course = this.route.snapshot.data['course'];

    this.loading = true;

    this.coursesService.findLessons(this.course.id)
        .pipe(
            finalize(() => this.loading = false)
        )
        .subscribe(
            lessons => this.lessons = lessons
        );

  }

  loadMore() {

      this.lastPageLoaded++;

      this.loading = true;

      this.coursesService.findLessons(this.course.id, 'asc',
          this.lastPageLoaded)
          .pipe(
              finalize(() => this.loading = false)
          )
          .subscribe(lessons => this.lessons = this.lessons.concat(lessons));
  }

}
