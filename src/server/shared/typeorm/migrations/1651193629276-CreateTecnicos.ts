import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTecnicos1651193629276 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tecnicos',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'descricao',
            type: 'varchar',
          },
          {
            name: 'avaliacao',
            type: 'integer',
          } /* 
          {
            name: 'servico_id',
            type: 'uuid',
          },
          {
            name: 'cliente_id',
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
            name: 'servico_id',
            referencedTableName: 'servicos',
            referencedColumnNames: ['id'],
            columnNames: ['servico_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'cliente_id',
            referencedTableName: 'clientes',
            referencedColumnNames: ['id'],
            columnNames: ['cliente_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ], */,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tecnicos');
  }
}
