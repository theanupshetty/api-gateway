public class EmailService : IEmailService
{
    private readonly IUserService _userService;
    public EmailService(IUserService userService)
    {
        _userService = userService;
    }
    public async Task SendResetPasswordEmail(string email)
    {
        var token = await _userService.GeneratePasswordResetTokenAsync(email);
    }
}