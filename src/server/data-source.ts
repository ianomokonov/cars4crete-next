import { DataSource, getMetadataArgsStorage } from 'typeorm';

export const getDataSource = (): DataSource => {
  return new DataSource({
    name: 'nomokoiw_car',
    type: 'mysql',
    synchronize: true,
    entities: getMetadataArgsStorage()
      .tables // .filter((table) => !!table.schema)
      .map((tbl) => tbl.target),
    logging: true,
    host: 'nomokoiw.beget.tech',
    // port: 3306,
    username: 'nomokoiw_car',
    password: 'MX%Ma4ya',
    database: 'nomokoiw_car',
  });
};
