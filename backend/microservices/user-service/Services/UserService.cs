using Microsoft.AspNetCore.Identity;

public class UserService : IUserService
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly SignInManager<ApplicationUser> _signInManager;
    private readonly JwtTokenService _jwtTokenService;

    public UserService(UserManager<ApplicationUser> userManager,
    SignInManager<ApplicationUser> signInManager,
    JwtTokenService jwtTokenService)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _jwtTokenService = jwtTokenService;
    }

    public async Task<string> LoginAsync(LoginDto model)
    {
        var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, lockoutOnFailure: false);
        if (result.Succeeded)
        {
            var user = await _userManager.FindByEmailAsync(model.Email);
            var token = _jwtTokenService.GenerateToken(user);
            return token;
        }
        throw new Exception("Invalid login attempt.");
    }

    public async Task<IdentityResult> RegisterAsync(UserRegisterDto model)
    {
        var user = new ApplicationUser
        {
            UserName = model.Email,
            Email = model.Email,
            FirstName = model.FirstName,
            LastName = model.LastName
        };
        var result = await _userManager.CreateAsync(user, model.Password);
        return result;
    }

    public async Task<IdentityResult> ChangePasswordAsync(ChangePasswordDto model)
    {
        var user = await _userManager.FindByEmailAsync(model.Email);
        var result = await _userManager.ChangePasswordAsync(user, model.CurrentPassword, model.NewPassword);
        return result;
    }

    public async Task<string> GeneratePasswordResetTokenAsync(string email)
    {
        var user = await _userManager.FindByEmailAsync(email);
        if (user == null)
            throw new Exception("User not found.");

        var token = await _userManager.GeneratePasswordResetTokenAsync(user);
        return token;
    }

    public async Task<IdentityResult> ResetPasswordAsync(ResetPasswordDto model)
    {
        var user = await _userManager.FindByEmailAsync(model.Email);
        var result = await _userManager.ResetPasswordAsync(user, model.Token, model.NewPassword);
        return result;
    }
}