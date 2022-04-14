import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../models/post.model";
import { API } from "./api";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  private _postsApiUrl = `${API}/posts`;

  constructor(private readonly _http: HttpClient) {}

  public getPosts(): Observable<Post[]> {
    return this._http.get<Post[]>(this._postsApiUrl);
  }
}
