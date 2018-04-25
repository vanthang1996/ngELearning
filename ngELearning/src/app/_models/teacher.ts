import { Role } from './role';

export class Teacher {
  public teacherId: number;
  public firstName: string;
  public lastName: string;
  public fullName = this.firstName + ' ' + this.lastName;
  public birthDay: Date;
  public email: string;
  public password: string;
  public avatar: string;
  public address: string;
  public phoneNumber: string;
  public sex: boolean;
  public departmentId: number;
  public subjects: any[];
  public jobs: any[];
  public role: Role[];
}
