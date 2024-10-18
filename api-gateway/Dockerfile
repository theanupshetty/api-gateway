# Use the official .NET SDK image to build and publish the application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the .csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# Copy the entire project into the container
COPY . ./

# Build and publish the project to the /out directory
RUN dotnet publish -c Release -o /out

# Use the official .NET runtime image to run the application
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime

# Set the working directory inside the runtime container
WORKDIR /app

# Copy the published output from the build container
COPY --from=build /out .

# Expose the port the API Gateway will run on (Ocelot typically uses port 5000 or 80)
EXPOSE 5000

# Set the entry point to run the Ocelot API Gateway
ENTRYPOINT ["dotnet", "api-gateway.dll"]
