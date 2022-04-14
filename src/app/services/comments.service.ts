import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Commentary } from "../models/comment.model";
import { API } from "./api";

@Injectable({
  providedIn: "root"
})
export class CommentsService {
  private _commentsApiUrl = `${API}/comments`;

  constructor(private readonly _http: HttpClient) {}

  public getAllComments(): Observable<Commentary[]> {
    return this._http.get<Commentary[]>(this._commentsApiUrl);
  }

  public getCommentsByPostId(postId: number): Observable<Commentary[]> {
    return this._http
      .get<Commentary[]>(this._commentsApiUrl)
      .pipe(
        map((comments) =>
          comments.filter((comment) => comment.postId === postId)
        )
      );
  }
}
