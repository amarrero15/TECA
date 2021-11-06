import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../../models/user';
import { ProfileService } from '../../../services/profile.service';
@Component({
  selector: 'app-professor-profile',
  templateUrl: './professor-profile.component.html',
  styleUrls: ['./professor-profile.component.scss'],
})
export class ProfessorProfileComponent implements OnInit {
  currentUser = new User();
  constructor(private userService: UserService, private profileService: ProfileService) { }

  ngOnInit() {
    this.getProfileInformantion();
  }

  getProfileInformantion(){
    this.profileService.getProfileInformation(localStorage.getItem('token')).then(res=>{
      this.currentUser= res.data() as User;
    });
    console.log('Mis datos desde la consulta a la base de datos son estos Usuario');
  }

  logout(){
    this.userService.logout();
  }
}
