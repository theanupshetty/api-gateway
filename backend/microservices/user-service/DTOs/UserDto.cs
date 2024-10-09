public class UserRegisterDto
{
    public string Username { get; set; }
    public string Password { get; set; }
    public string Email { get; set; }
}
public class UserResponseDto
{
    public Guid Id { get; set; }
    public string Username { get; set; }
    public string Email { get; set; }
}