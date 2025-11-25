import { Injectable, NotFoundException } from '@nestjs/common';
import { ICoustomer } from './coustomer.interface';
import { CustomerDto } from './dto/coustomer.dto';

@Injectable()
export class CoustomerService {
  private coustomers: ICoustomer[] = [];

  createCoustomer(payload: CustomerDto): ICoustomer {
    const result: ICoustomer = {
      id: Date.now(),
      ...payload,
    };
    this.coustomers.push(result);
    if (!result) throw new NotFoundException('Coustomer not created');
    return result;
  }

  getAllCoustomer(): ICoustomer[] {
    return this.coustomers;
  }

  getCoustomerById(id: number): ICoustomer {
    const result = this.coustomers.find((coustomer) => coustomer.id === id);
    if (!result) throw new NotFoundException('Coustomer not found');
    return result;
  }

  deleteCoustomer(id: number): string {
    const result = this.coustomers.find((coustomer) => coustomer.id === id);
    if (!result) throw new NotFoundException('Coustomer not found');
    this.coustomers = this.coustomers.filter(
      (coustomer) => coustomer.id !== id,
    );
    return 'Coustomer deleted successfully';
  }
}
