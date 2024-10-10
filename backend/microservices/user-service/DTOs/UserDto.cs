using System.ComponentModel.DataAnnotations;

public class UserRegisterDto
{
    [Required]
    public string FirstName { get; set; }
    [Required]
    public string LastName { get; set; }
    [Required]
    public string Password { get; set; }
    [Required]
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