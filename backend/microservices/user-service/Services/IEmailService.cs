public interface IEmailService
{
    Task SendResetPasswordEmail(string email);
}