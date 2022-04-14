import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Post } from "src/app/models/post.model";
import { User } from "src/app/models/user.model";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  @Input() public post: Post;
  public autor: User;

  constructor(
    private readonly _usersService: UsersService,
    private readonly _router: Router
  ) {}

  public ngOnInit(): void {
    this._usersService
      .getUserById(this.post.userId)
      .subscribe((user) => (this.autor = user));
  }

  public visitAutor(): void {
    this._router.navigate([`/profile/${this.autor.id}`]);
  }
}
