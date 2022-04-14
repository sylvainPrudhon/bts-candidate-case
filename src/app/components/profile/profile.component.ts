import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "src/app/models/user.model";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent {
  public user: User;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _usersService: UsersService
  ) {
    this._activatedRoute.params.subscribe((params) => {
      this.getUserProfile(parseInt(params.id, 10));
    });
  }

  public mailTo(): void {
    window.open(`mailto:${this.user.email.toString()}`);
  }

  public phoneCallTo(): void {
    window.open(`tel:${this.user.phone}`);
  }

  private getUserProfile(userId: number): void {
    this._usersService.getUserById(userId).subscribe((user) => {
      this.user = user;
    });
  }
}
