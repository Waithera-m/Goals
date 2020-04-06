import { Injectable } from '@angular/core';

//import goal class;

import { Goal } from '../goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  

  constructor() { }

  getGoals(){
    return [
    new Goal(1, 'Watch Finding Nemo', 'Find where the film is streaming and find out if Merlin finds his son', new Date(2020,2,25)),
    new Goal(2, 'Pull fewer that 1000 hairs', 'Meditation here we come', new Date(2020,2,26)),
    new Goal(3, 'Spook the imaginary cat', 'We obviously are talking about the imaginary cat we can keep due to the unfair lease agreement', new Date(2019,0,28)),
    new Goal(4, 'Talk with the non-existent dog', 'Again, unfair lease agreement leads to imaginary pets', new Date(2020,3,27)),
    ]
  }
}
