using Microsoft.AspNetCore.Identity;

public interface IUserService
{
    Task<IdentityResult> RegisterAsync(UserRegisterDto user);
    Task<string> LoginAsync(LoginDto user);
    Task<IdentityResult> ChangePasswordAsync(ChangePasswordDto user);
    Task<IdentityResult> ResetPasswordAsync(ResetPasswordDto user);
    Task<string> GeneratePasswordResetTokenAsync(string email);
}