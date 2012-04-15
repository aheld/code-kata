using NUnit.Framework;
using System;

namespace Product.Tests
{
    [TestFixture]
    public class CalculatorTests
    {
        [Test]
        public void Add_EmptyString_Return_Zero()
        {
            int result = Calculator.Add("");
            Assert.AreEqual(result, 0);
        }
    }
}
