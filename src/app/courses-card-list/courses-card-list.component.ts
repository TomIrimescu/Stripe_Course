import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CourseDialogComponent} from '@app/course-dialog/course-dialog.component';
import {Course} from '@app/model/course';
import { CheckoutService } from '@app/services/checkout.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent implements OnInit {

  @Input()
  courses: Course[];

  @Output()
  courseEdited = new EventEmitter();

  isLoggedIn: boolean;

  purchaseStarted = false;

  constructor(
    private dialog: MatDialog,
    private afAuth: AngularFireAuth,
    private checkout: CheckoutService) {
  }

  ngOnInit() {

    this.afAuth.authState
      .pipe(
        map(user => !!user)
      )
      .subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);

  }

  purchaseCourse(course: Course, isLoggedIn: boolean) {
    if (!isLoggedIn) {
      alert('Please login first.');
    }

    this.purchaseStarted = true;

    this.checkout.startCourseCheckoutSession(course.id)
      .subscribe(
        () => {

          console.log('Stripe checkout session initialized ...');
        },
        err => {
          console.log('Error creating checkout session', err);
          this.purchaseStarted = false;
        }
      );
  }
}
