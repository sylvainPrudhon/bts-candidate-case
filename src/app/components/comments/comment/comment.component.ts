import { Component, Input, OnInit } from "@angular/core";
import { Commentary } from "src/app/models/comment.model";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.scss"]
})
export class CommentComponent implements OnInit {
  @Input() public comment: Commentary;
  public email = "";
  public body = "";

  public ngOnInit(): void {
    this.email = this.comment.email;
    this.body = this.comment.body;
  }

  public visitProfile(): void {
    // Impossible because we don't have user data on comments
    // this._router.navigate([`/profile/${this._user.id}`]);
  }
}
