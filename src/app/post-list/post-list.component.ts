import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  Posts: Post[] = [
    {
      title: 'Learning Angular',
      thought: 'This shit is not making sense yet'
    },
    {
      title: 'JavaScript',
      thought: 'Think I have to review this'
    },
    {
      title: 'TypeScript',
      thought: 'might make more sense with practice...'
    }
  ]

  // variables for new posts
  // doing this to grab data from the form 

  NewTitle: string = '';
  NewThought: string = '';

  showAddPostForm: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  submitPost(){
    this.Posts.push({
      title: this.NewTitle,
      thought: this.NewThought
    }); 

    this.NewTitle = '';
    this.NewThought = '';
  }

  cancelPost(){
    this.showAddPostForm = false;
    this.NewTitle = '';
    this.NewThought = '';
  }

  showAddForm(){
    this.showAddPostForm = true;
  }

  RemovePost(whichPost: Post ){
    for (let index = 0; index < this.Posts.length; index++) {
      if (this.Posts[index] == whichPost) {
        this.Posts.splice(index, 1);
      }
      return;
      
    }
  }

}
