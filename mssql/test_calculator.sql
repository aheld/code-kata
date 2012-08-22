--  Comments here are associated with the test.
--  For test case examples, see: http://tsqlt.org/user-guide/tsqlt-tutorial/
ALTER PROCEDURE [kata].[test calculator]
AS
BEGIN

/*

	when null is passed to udf_Calculate function should return 0

*/

  --Assemble
  --  This section is for code that sets up the environment. It often
  --  contains calls to methods such as tSQLt.FakeTable and tSQLt.SpyProcedure
  --  along with INSERTs of relevant data.
  --  For more information, see http://tsqlt.org/user-guide/isolating-dependencies/
  
  declare @calcResult int
		,@mystring varchar(50) = NULL;
  
  --Act
  --  Execute the code under test like a stored procedure, function or view
  --  and capture the results in variables or tables.
  
	SELECT @calcResult= dbo.udf_Calculate(@mystring)
  
  --Assert
  --  Compare the expected and actual values, or call tSQLt.Fail in an IF statement.  
  --  Available Asserts: tSQLt.AssertEquals, tSQLt.AssertEqualsString, tSQLt.AssertEqualsTable
  --  For a complete list, see: http://tsqlt.org/user-guide/assertions/
  
  exec tsqlt.assertEquals @expected=0,@actual=@calcResult, @message='nullcase'
  
--  EXEC tSQLt.Fail 'TODO:Implement this test.'
  
END;

