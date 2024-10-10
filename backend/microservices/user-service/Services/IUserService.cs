using Microsoft.AspNetCore.Identity;

public interface IUserService 
{
    Task<IdentityResult> Register(UserRegisterDto user);
    Task<object> Login (LoginDto user);
}