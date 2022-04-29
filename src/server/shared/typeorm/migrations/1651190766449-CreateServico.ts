import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateServico1651190766449 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'servicos',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'titulo',
            type: 'varchar',
          },
          {
            name: 'mediaTempo',
            type: 'date',
          },
          {
            name: 'descricao',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'decimal',
            precision: 10,
            scale: 2,
          } /* 
          {
            name: 'tecnico_id',
            type: 'uuid',
          }, */,
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ] /* 
        foreignKeys: [
          {
            name: 'tecnico_id',
            referencedTableName: 'tecnicos',
            referencedColumnNames: ['id'],
            columnNames: ['tecnico_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ], */,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('servicos');
  }
}
