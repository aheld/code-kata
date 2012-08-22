-- ================================================
-- Template generated from Template Explorer using:
-- Create Scalar Function (New Menu).SQL
--
-- Use the Specify Values for Template Parameters 
-- command (Ctrl-Shift-M) to fill in the parameter 
-- values below.
--
-- This block of comments will not be included in
-- the definition of the function.
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date, ,>
-- Description:	<Description, ,>
-- =============================================
alter FUNCTION udf_Calculate
(
	-- Add the parameters for the function here
	@pString varchar(50)
)
RETURNS int
AS
BEGIN
	-- Declare the return variable here
	DECLARE @ResultVar int
	

	-- Add the T-SQL statements to compute the return value here
	SELECT @ResultVar = 1

	-- Return the result of the function
	RETURN @ResultVar

END
GO

