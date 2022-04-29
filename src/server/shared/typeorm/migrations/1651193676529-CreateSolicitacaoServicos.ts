import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSolicitacaoServicos1651193676529
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'solicitacaoServicos',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'status',
            type: 'varchar',
          },

          {
            name: 'validacao',
            type: 'varchar',
          } /* 
          {
            name: 'chat_id',
            type: 'uuid',
          },
          {
            name: 'tecnico_id',
            type: 'uuid',
          },
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
            name: 'chat_id',
            referencedTableName: 'chats',
            referencedColumnNames: ['id'],
            columnNames: ['chat_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'tecnico_id',
            referencedTableName: 'tecnicos',
            referencedColumnNames: ['id'],
            columnNames: ['tecnico_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
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
    await queryRunner.dropTable('solicitacaoServicos');
  }
}
