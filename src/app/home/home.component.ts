import {Component, OnInit} from '@angular/core';
import {Course} from '@app/model/course';
import {CoursesService} from '@app/services/courses.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    courses$: Observable<Course[]>;

    beginnersCourses$: Observable<Course[]>;

    advancedCourses$: Observable<Course[]>;

    processingOngoing = false;

    constructor(
      private coursesService: CoursesService) {

    }

    ngOnInit() {

        this.reloadCourses();

    }

    reloadCourses() {

        this.courses$ = this.coursesService.loadAllCourses();

        this.beginnersCourses$ = this.courses$.pipe(
            map(courses => courses.filter(
                course => course.categories.includes('BEGINNER'))));

        this.advancedCourses$ = this.courses$.pipe(
            map(courses => courses.filter(
                course => course.categories.includes('ADVANCED'))));
    }

  subscribeToPlan() {

  }
}
