using Microsoft.AspNetCore.Identity;

public class PasswordHasher
{
    private readonly IPasswordHasher<User> _passwordHasher;

    public PasswordHasher()
    {
        _passwordHasher = new PasswordHasher<User>();
    }

    public string Hash(string password)
    {
        var user = new User(); // Creating a dummy user object for hashing
        return _passwordHasher.HashPassword(user, password);
    }

    public bool Verify(string hashedPassword, string providedPassword)
    {
        var user = new User(); // Creating a dummy user object for verification
        var result = _passwordHasher.VerifyHashedPassword(user, hashedPassword, providedPassword);

        return result == PasswordVerificationResult.Success;
    }
}
