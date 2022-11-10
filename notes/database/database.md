# typeorm

For integrating with SQL and NoSQL databases, Nest provides the @nestjs/typeorm package.

Nest uses TypeORM because it's the most mature Object Relational Mapper (ORM) available for TypeScript.
Since it's written in TypeScript, it integrates well with the Nest framework.

# > npm install --save @nestjs/typeorm typeorm mysql2

app.module.ts

imports:[
TypeOrmModule.forRoot({
type: 'mysql',
host: 'localhost',
port: 3306,
username: 'root',
password: 'root',
database: 'test',
entities: [],
synchronize: true,
}),
]

# synchronize: true shouldn't be used in production - otherwise you can lose production data.

# forRoot() method supports all the configuration properties exposed by the DataSource constructor from the TypeORM package

more properties

retryAttempts-
Number of attempts to connect to the database (default: 10)

retryDelay-
Delay between connection retry attempts (ms) (default: 3000)

autoLoadEntities-
If true, entities will be loaded automatically (default: false)
