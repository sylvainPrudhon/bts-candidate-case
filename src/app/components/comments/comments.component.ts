import { Component, Input } from "@angular/core";
import { Commentary } from "src/app/models/comment.model";
import { CommentsService } from "src/app/services/comments.service";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.scss"]
})
export class CommentsComponent {
  @Input() public postId: number;
  public panelAlreadyOpened = false;
  public comments: Commentary[] = [];

  constructor(private readonly _commentsService: CommentsService) {}

  public onPanelOpened(): void {
    this.getCommentsByPostId();
    this.panelAlreadyOpened = true;
  }

  private getCommentsByPostId(): void {
    this._commentsService
      .getCommentsByPostId(this.postId)
      .subscribe((comments) => {
        this.comments = comments;
      });
  }
}
