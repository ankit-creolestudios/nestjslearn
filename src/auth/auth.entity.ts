import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class AuthUser {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ name: 'email' })
  email: string;
  @Column({ name: 'username' })
  username: string;
  @Column({ name: 'password' })
  password: string;
}
