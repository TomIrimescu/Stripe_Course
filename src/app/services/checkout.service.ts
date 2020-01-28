import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) {

  }

 /**
  * When the 'BUY COURSE' button is clicked
  * a post is made to the Stripe checkout
  * endpoint with the course id being
  * purchased
  *
  * @param courseId : string
  */
  startCourseCheckoutSession(courseId: string) {
    return this.http.post('/api/checkout', {
      courseId
    });
  }

}
