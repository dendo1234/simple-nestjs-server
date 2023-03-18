import { PartialType } from '@nestjs/mapped-types';
import { CreateCanetaDto } from './create-caneta.dto';

export class UpdateCanetaDto extends PartialType(CreateCanetaDto) {
    name?: string;
    image: string;
}
