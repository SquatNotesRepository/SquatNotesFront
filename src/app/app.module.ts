import { MessageService } from './services/message.service';
import { AuthUserGuard } from './guard/AuthUser.guard';
import { AuthSuperGuard } from './guard/AuthSuper.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { TrainingListComponent } from './training-list/training-list.component';
import { SupportComponent } from './support/support.component';
import { TrainingDetailComponent } from './training-detail/training-detail.component';
import { SuperSetComponent } from './super-set/super-set.component';
import {HttpService} from './services/http.service';
import {HttpClientModule} from '@angular/common/http';
import { HttpTesterComponent } from './http-tester/http-tester.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import {AppService} from './services/app.service';
import {AuthenticationService} from './services/authentication.service';
import {AuthGuard} from './guard/Auth.guard';
import {AlertService} from './services/alert.service';
import { ProgressComponent } from './progress/progress.component';
import { ProgressChartComponent } from './progress-chart/progress-chart.component';
import {ChartsModule} from 'ng2-charts';
import {ProgressService} from './services/progress.service';
import {TrainingService} from './services/training.service';
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TrainingAddComponent } from './training-add/training-add.component';
import {Ng5SliderModule} from 'ng5-slider';
import { SuperSetAddComponent } from './super-set-add/super-set-add.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseAddComponent } from './exercise-add/exercise-add.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileListFilterComponent } from './profile-list-filter/profile-list-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SupportChatComponent } from './support-chat/support-chat.component';
import { SupportChatAddComponent } from './support-chat-add/support-chat-add.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    TrainingListComponent,
    SupportComponent,
    TrainingDetailComponent,
    SuperSetComponent,
    HttpTesterComponent,
    RegisterComponent,
    ProgressComponent,
    ProgressChartComponent,
    ProfilePhotoComponent,
    ImageCropperComponent,
    TrainingAddComponent,
    SuperSetAddComponent,
    ExerciseListComponent,
    ExerciseAddComponent,
    ProfileListComponent,
    ProfileListFilterComponent,
    SupportChatComponent,
    SupportChatAddComponent,
    ProfileDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgbModule,
    Ng5SliderModule,
    BrowserAnimationsModule
  ],
  providers: [HttpService, AppService, AuthenticationService, AuthGuard, AuthSuperGuard, AuthUserGuard, AlertService, ProgressService, TrainingService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
