import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { PostsComponent } from "./components/posts/posts.component";
import { ProfileComponent } from "./components/profile/profile.component";

const routes: Routes = [
  { path: "", component: PostsComponent },
  { path: "profile/:id", component: ProfileComponent },
  { path: "**", component: PageNotFoundComponent }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
