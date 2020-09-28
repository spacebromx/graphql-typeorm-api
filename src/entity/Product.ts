import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity} from "typeorm"
import {Field, Int, ObjectType} from "type-graphql"

@ObjectType()
@Entity()
export class Product extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field(() => Int)
  @Column("int", {default: 0})
  quantity!: number;

  @Field()
  @CreateDateColumn({type: "timestamp"})
  creeatedAt!: string;
}