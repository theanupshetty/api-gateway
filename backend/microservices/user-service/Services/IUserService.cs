public interface IUserService
{
    Task<UserResponseDto> RegisterAsync(UserRegisterDto userDto);
    //Task<UserResponseDto> AuthenticateAsync(string username, string password);
}
