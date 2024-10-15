public interface IEmailService
{
    Task SendEmailAsync(ApplicationUser user, TemplateDto model);
}