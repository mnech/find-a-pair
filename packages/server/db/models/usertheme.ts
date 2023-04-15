import {
  Model,
  Column,
  Table,
  DataType,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';
import { Theme } from './theme';
import { User } from './user';

@Table({
  tableName: 'user_theme',
})
export class Usertheme extends Model<Usertheme> {
  @ForeignKey(() => Theme)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  theme_id!: number;

  @ForeignKey(() => User)
  @PrimaryKey
  @Column({
    type: DataType.TEXT,
  })
  user_id!: string;
}
