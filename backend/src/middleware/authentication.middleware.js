export const authenticate = (allowedRoles) => {
    return (req, _res, next) => {
        // לא הפרדתי את הבדיקה האם תוקן קיים למידלוויר אחר כי בכל מקרה לא אוכל להעביר את התוקן למידלוויר שבודק הרשאות
        const authHeader = req.headers.authorization;
        if (!authHeader?.startsWith("Bearer ")) {
            throw new AppError("Invalid token!", 401);
        }
    
        const token = authHeader.split(" ")[1];
    
        const { role } = compareToken(token);
    
        if (!allowedRoles.includes(role)) throw new AppError("Permission denied!", 403);
    
        next();
    }
}