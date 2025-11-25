import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    const user = this.users.find((u) => u.id === id);
    return user || null;
  }

  createUser(name: string, email: string) {
    const newUser = { id: this.users.length + 1, name, email };
    this.users.push(newUser);
    return newUser;
  }

  deleteUser(id: number) {
    const result = this.users.filter((u) => u.id !== id);
    return result;
  }
}
