import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/services/users.service";
import { Post } from "../../models/post.model";
import { PostsService } from "../../services/posts.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  public posts: Post[] = [];

  constructor(
    private readonly _postsService: PostsService,
    private readonly _usersService: UsersService
  ) {}

  public ngOnInit(): void {
    this._usersService.setUsers().subscribe();
    this._postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  public drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.posts, event.previousIndex, event.currentIndex);
  }
}
