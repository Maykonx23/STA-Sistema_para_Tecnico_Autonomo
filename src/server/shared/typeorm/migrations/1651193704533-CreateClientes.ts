import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateClientes1651193704533 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'clientes',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },

          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'cpf',
            type: 'integer',
            isUnique: true,
          },
          {
            name: 'data_nasc',
            type: 'date',
          },
          {
            name: 'telefone',
            type: 'varchar',
          },
          {
            name: 'avaliacao',
            type: 'integer',
          } /* 
          {
            name: 'endereco_id',
            type: 'uuid',
          },
          {
            name: 'solicitacao_servico_id',
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
            name: 'endereco_id',
            referencedTableName: 'enderecos',
            referencedColumnNames: ['id'],
            columnNames: ['endereco_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'solicitacao_servico_id',
            referencedTableName: 'solicitacaoServicos',
            referencedColumnNames: ['id'],
            columnNames: ['solicitacao_servico_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ], */,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('clientes');
  }
}
