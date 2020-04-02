import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  //
  goals:Goal [] = [
    new Goal(1, 'Watch Finding Nemo', 'Find where the film is streaming and find out if Merlin finds his son', new Date(2020,2,25)),
    new Goal(2, 'Pull fewer that 1000 hairs', 'Meditation here we come', new Date(2020,2,26)),
    new Goal(3, 'Spook the imaginary cat', 'We obviously are talking about the imaginary cat we can keep due to the unfair lease agreement', new Date(2019,0,28)),
    new Goal(4, 'Talk with the non-existent dog', 'Again, unfair lease agreement leads to imaginary pets', new Date(2020,3,27)),
  ];
  
  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
      if (toDelete){
        this.goals.splice(index, 1)
      }
    }
  }

  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal)
  }

  constructor() { }

  ngOnInit() {
  }

}
