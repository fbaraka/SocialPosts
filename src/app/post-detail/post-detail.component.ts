import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  @Input() ThePost: Post = {
    title: 'Test',
    thought: 'The test is up and a go'

  }

  @Output() removePostEmitter: EventEmitter<Post> = new EventEmitter<Post>;

  // edit variable to grab from the edit form
  editTitle: string = '';
  editThought: string = '';

  showEdit: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  edit(){
    this.showEdit = true;

    this.editTitle = this.ThePost.title;
    this.editThought = this.ThePost.thought;
  }

  deleet(){
    this.removePostEmitter.emit(this.ThePost);
  }

  saveChanges(){
    this.showEdit = false;

    this.ThePost.title = this.editTitle;
    this.ThePost.thought = this.editThought;
  }

  cancelChanges(){
    this.showEdit = false;
    this.editTitle = '';
    this.editThought = '';
  }
}
