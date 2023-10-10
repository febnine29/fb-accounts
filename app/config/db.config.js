module.exports = {
    HOST: "db.fvxzttzexvnuaacgfree.supabase.co", // localhost
    USER: "postgres",
    PASSWORD: "Ntpa-081299@", //123456
    DB: "postgres", // userrecord
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};