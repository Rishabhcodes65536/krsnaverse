import session from 'express-session';

// Create session middleware
const sessionMiddleware = session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 } // 1 hour expiration
});

export default sessionMiddleware;
