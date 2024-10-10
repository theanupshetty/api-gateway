public class UserRegisterDto
{
    public string Password { get; set; }
    public string Email { get; set; }
}
public class UserResponseDto
{
    public Guid Id { get; set; }
    public string Email { get; set; }
}

public class LoginDto
{
    public string Email { get; set; }
    public string Password { get; set; }
    public bool RememberMe { get; set; }
}